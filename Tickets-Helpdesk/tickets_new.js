fd.spRendered(function() {
    fd.field('TicketStatus').value = 'InProgress';
  });
  
  
  
  
  fd.spRendered(function() {
  
      function hideOrShowTicketID() {
          if (fd.field('Registration').value === 'Usunięcie zlecenia' || 
              fd.field('Registration').value === 'Usunięcie zamówienia' ||
              fd.field('Registration').value === 'Edycja zlecenia' ||
              fd.field('Registration').value === 'Edycja zamówienia') {
              fd.field('TicketID').hidden = false;
          } else {
              fd.field('TicketID').hidden = true;
          }
      }
  
      fd.field('Registration').$on('change', hideOrShowTicketID);
  
      hideOrShowTicketID();
  });
  
  fd.spRendered(function() {
  
      function hideOrShowClientField() {
          if (fd.field('Registration').value == 'Nowy powód selekcji') {
              // Show the Client field
              fd.field('ReasonSelection').hidden = false;
          } else {
              // Hide the Client field
              fd.field('ReasonSelection').hidden = true;
          }
      }
  
      // Calling hideOrShowClientField when the Department Rated value changes
      fd.field('Registration').$on('change', hideOrShowClientField);
  
      // Calling hideOrShowClientField on form loading
      hideOrShowClientField();
  });
  
  fd.spRendered(function() {
  
      function hideOrShowClientField() {
          if (fd.field('Registration').value == 'Dodanie osoby zlecającej') {
              // Show the Client field
              fd.field('PersonAccount').hidden = false;
          } else {
              // Hide the Client field
              fd.field('PersonAccount').hidden = true;
          }
      }
  
      // Calling hideOrShowClientField when the Department Rated value changes
      fd.field('Registration').$on('change', hideOrShowClientField);
  
      // Calling hideOrShowClientField on form loading
      hideOrShowClientField();
  });
  
  fd.spRendered(function() {
  
      function hideOrShowCommentsField() {
          if (fd.field('Toggle1').value) {
              // Show the Comments field
              fd.field('Submission_x0020_details').hidden = false;
          } else {
              // Hide the Comments field
              fd.field('Submission_x0020_details').hidden = true;
          }
      }
  
      // Calling hideOrShowCommentsField when the Toggle1 value changes
      fd.field('Toggle1').$on('change', hideOrShowCommentsField);
  
      // Calling hideOrShowCommentsField on form loading
      hideOrShowCommentsField();
  });