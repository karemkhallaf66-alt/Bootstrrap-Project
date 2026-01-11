


document.addEventListener('DOMContentLoaded', function() {
    
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    const successModal = new bootstrap.Modal(document.getElementById('successModal')); 
    
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            
           
            const textToCopy = button.previousElementSibling.querySelector('.copy-target');

            if (!textToCopy) {
                console.error("لم يتم العثور على مربع النص المراد نسخه!");
                return;
            }
            
            
            textToCopy.select();
            textToCopy.setSelectionRange(0, 99999);

            try {
                document.execCommand('copy');
                
                
                successModal.show(); 

              
                
            } catch (err) {
                console.error('Failed to copy text: ', err);
                alert('فشل في النسخ.');
            }

            window.getSelection().removeAllRanges();
        });
    });
});
 






