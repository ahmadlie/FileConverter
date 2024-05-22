function convertDocxToPdf(docxContent) {
    var pdfContent = docxContent.replace(/<\/?[^>]+(>|$)/g, '');
    console.log('PDF struct:', pdfContent);
}

function readDocxFile(file) {
    var reader = new FileReader();

    reader.onload = function (event) {
        var docxContent = event.target.result;
        convertDocxToPdf(docxContent);
    };

    reader.readAsText(file);
}




function convertFile() {
    
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];

    
    var convertTypeSelect = document.getElementById('convertType');
    var convertType = convertTypeSelect.value;

    
    if (file && convertType) {
        if (convertType === 'pdf') {

        } else if (convertType === 'docx') {
           
            
        } else if (convertType === 'jpg') {
            
            
        } else {
           
            
        }
    } else {
        
        alert('Please Choose file!');
    }
}