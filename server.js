import http from 'http';
import * as fs from "fs";
import XLSX from 'xlsx';

const PORT=3000;
const server = http.createServer((req,res)=>{
     res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
    }

    if(req.method === 'POST' && req.url === '/submit')
    {
        let body='';
        req.on('data',(chunk)=>{
            body+=chunk.toString();
        });
        req.on('end',()=>{
            const formData = JSON.parse(body);
            const filePath = './admissions.xlsx';
            let workbook;
            let worksheet;
            if (fs.existsSync(filePath)) {
            workbook = XLSX.readFile(filePath);
            worksheet = workbook.Sheets[workbook.SheetNames[0]];
            } else {
            workbook = XLSX.utils.book_new();
            worksheet = XLSX.utils.aoa_to_sheet([['Name', 'Email', 'Course']]);
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Admissions');
            }
            const existingData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            existingData.push([formData.name, formData.email, formData.course]);
            const newWorksheet = XLSX.utils.aoa_to_sheet(existingData);
            workbook.Sheets[workbook.SheetNames[0]] = newWorksheet;
            XLSX.writeFile(workbook, filePath);
            res.writeHead(200,{'content-type':'application/json'});
            let msg={message:'Data received successfully'};
            res.end(JSON.stringify(msg));

        });

    }
    else
    {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});
server.listen(PORT,()=>{
    console.log(`Server listeninng on PORT:${PORT}`);
})

