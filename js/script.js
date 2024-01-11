// Accessing input fields and textarea by their IDs
var nameInput = document.getElementById('name');
var accNoInput = document.getElementById('accNo');
var ifscInput = document.getElementById('ifsc');
var custIDInput = document.getElementById('custID');
var adhaarInput = document.getElementById('adhaar');
var addressTextarea = document.getElementById('address');


function addContentFromEdit(editFieldId, targetField) {
    var editField = document.getElementById(editFieldId);
    var fieldValue = editField.value;

    switch (targetField) {
        case 'id_pic':
            var imageElement = document.getElementById('id_pic');
            // https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
            if (imageElement) {
                imageElement.src = fieldValue;
            }
            break;          
        case 'name':
            document.getElementById('name').value = fieldValue;
            break;
        case 'accNo':
            document.getElementById('accNo').value = fieldValue;
            break;
        case 'ifsc':
            document.getElementById('ifsc').value = fieldValue;
            break;
        case 'custId':
            document.getElementById('custId').value = fieldValue;
            break;
        case 'adhaar':
            document.getElementById('adhaar').value = fieldValue;
            break;
        case 'address':
            document.getElementById('address').value = fieldValue;
            break;
        default:
            break;
    }
}

function clearContent(editFieldId) {
    document.getElementById(editFieldId).value = '';
   
}


function downloadAsPDF() {

    const cardSection = document.querySelector('.card_section');
  
    const actualHeight = cardSection.scrollHeight + 400;
  
    const pdf = new html2pdf(cardSection, {
      margin: 10,
      filename: 'document.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        height: actualHeight, // Capture the full height
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
      },
    });
  
    // Save the PDF
    pdf.save();
  }
  