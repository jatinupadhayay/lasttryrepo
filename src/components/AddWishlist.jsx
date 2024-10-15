const fetchUsers = async () => {
      try {
     const res = await fetch('http:localhost:8000/wishlist/add', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json', 
           },
           body: JSON.stringify({ /* your data here */ }),  
         });
  
         if (!res.ok) {
           throw new Error('Network response was not ok');
         }
  
         const json = await res.json();
         console.log(json);  
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     };
  
  
     useEffect(() => {
       fetchUsers();
     }, []); 