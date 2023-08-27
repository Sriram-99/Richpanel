// formatDate.js

function formatDate(){
    const date = new Date();
  
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const year = String(date.getFullYear());
  
    const formattedDate = `${day}/${month}/${year}`;
  
    return formattedDate;
  }
  
  module.exports=formatDate;
  