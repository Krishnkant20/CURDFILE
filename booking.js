let fetchData=  async ()=>{

    try{
    let url='http://localhost:3000/Doctor Appointment';
     let res= await fetch(url,{method:"GET"})
     let data=await res.json()
     console.log(data);
  
     let output=document.querySelector("#display")
  
     data.map((e)=>{
        output.innerHTML+=`
           <tr>
           <td>${e.patientname}</td>
           <td>${e.mobilenumber}</td>
           <td>${e.doctorname}</td>
           <td>${e.problem}</td>
           <td>${e.appoinmentdate}</td>
           <td>${e.appoinmenttime}</td>
           <td onclick="condelte('${e.id}')">Delete</td>
                      <td onclick="formfill('${e.id}')">Update</td>

           </tr>
        `
     })
  
    }
    catch(error){
        console.log(error);
        
    }
  
  
  }
  
   // =================================== delete ====================================

  let condelte=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            del(id)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
  }
  
  let del=(id)=>{
   
    let url=`http://localhost:3000/Doctor Appointment/${id}`;

    fetch(url,{
        method:"DELETE"
    })
  }
  
  
  //============================  POST ===========================================
  let ins=()=>{
   
    let pickloc=document.querySelector("#pick-loc").value;
    let droploc=document.querySelector("#drop-loc").value;
    let pickdate=document.querySelector("#pick-date").value;
    let problem=document.querySelector("#prob").value;
    let dropdate=document.querySelector("#drop-date").value;
    let picktime=document.querySelector("#pick-time").value;
  
    let url='http://localhost:3000/Doctor Appointment'
    fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "patientname": pickloc,
            "mobilenumber": droploc,
            "doctorname": pickdate,
            "problem":problem,
            "appoinmentdate": dropdate,
            "appoinmenttime": picktime
        })
  
    })

   location.href="form.html"

  return false;
  
  }
  
  
 // ===================================Update form====================================


 
 let formfill=async(id)=>{

    let url=`http://localhost:3000/Doctor Appointment/${id}`;

   let res=await fetch(url)
   let data=await res.json()
  
   let formdata=`

    
    <section id="booking" >
        <div class="book-div">
            
            <form action="">

            <div class="book-div1" style="background-color: red;">

                  <h2>UPDATE YOUR FORM</h2>

                 <h4>UPDATE PATIENT NAME</h4>
                 <input type="text" id="update-pick-loc">

                 
                 <h4>UPDATE MOBILE NUMBER</h4>
                 <input type="number" id="update-drop-loc">

                 
                 <h4>UPDATE DOCTOR NAME</h4>
                 <input type="text" id="update-pick-date">

                  
                 <h4>UPDATE PROBLEM</h4>
                 <input type="text" id="prob">

                 
                 <h4>UPDATE APPOINTMENT DATE</h4>
                 <input type="date" id="update-drop-date">

                 
                 <h4>UPDATE APPOINTMENT TIME</h4>
                 <input type="time" id="update-pic-time">

      <input type="submit" onclick="finalupdate('${data.id}')">


                </form>

        

           
        </div>
    </section>
   
   `

   document.querySelector("#updateshow").innerHTML=formdata



}

  // ===================================Update fill form====================================


let finalupdate=(id)=>{

  let updatepickloc=document.querySelector("#update-pick-loc").value;
  let updatedroploc=document.querySelector("#update-drop-loc").value;
  let updatepickdate=document.querySelector("#update-pick-date").value;
  let updateproblem=document.querySelector("#prob").value;
  let updatedropdate=document.querySelector("#update-drop-date").value;
  let updatepicktime=document.querySelector("#update-pic-time").value;


  
try{
    let url=`http://localhost:3000/Doctor Appointment/${id}`;

    fetch(url,
      {method:"PUT",
       
      headers:{
          "Content-Type":"application/json",
      },

      body:JSON.stringify(
          {
            "patientname": updatepickloc,
            "mobilenumber": updatedroploc,
            "doctorname": updatepickdate,
            "problem":updateprob,
            "appointmentdate": updatedropdate,
            "appointmenttime": updatepicktime

          }
      )
      })
      
  }
  catch(error){
      console.log(error);
      
  }


}