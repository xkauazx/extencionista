
        function expand(id) {
            const content = document.getElementById(id);
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        }
        
       
        
        
   
        document.addEventListener('DOMContentLoaded', function() {
            const expandedContents = document.querySelectorAll('.expanded-content');
            expandedContents.forEach(content => {
                content.style.display = 'none';
            });
        });