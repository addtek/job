const list = [
  {
    job_title: "Frontend Developer ",
    onApply: "https://docs.google.com/forms/d/e/1FAIpQLScZWuXRmxqr0nNQdOLyO0Y-KTwJJ-BOzf5jQFhTxBhyxJuHWA/viewform",
    img:"./image/kpi.svg",
    type:"Remote",
    deadline: "18th November",
    msg:
      "As a Front-end Developer Intern, you will be responsible for implementing visual elements that users see and interact within a web application, which makes your role crucial for the success of our business. We love Typescript at KPILENS and work with some of the latest JS technologies in the ecosystem",
  },

  {
    job_title: "Full Stack Developer",
    onApply: "mailto:careers@judi.ai",
    img:"./image/judi-logo.png",
    type:"OnSite",
    deadline: "9th December",
    msg:
      "You will analyze and automate various processes using new, cutting-edge technologies that theorganization is currently implementing, and which are growing very fast on a global scale. Knowledge of some programming language (Java, .NET, C++, C, JavaScript, HTML), workflow tools, Agile and excellent English required",
  },

  {
    job_title: "Frontend Developer",
    onApply: "mailto:liana@meltwater.org",
    img:"./image/kpmg-logo.png",
    type:"OnSite",
    deadline: "28th November",
    msg:
      "JUDI.AI’s industry-leading automated loan underwriting platform and credit risk analysis module empower lenders to deliver a fair, fast AI-powered loan experience to their commercial banking customers. Judi is currently looking for fullstack developers to join the team",
  },

  {
    job_title: "Frontend Developer",
    onApply: "mailto:careers@profishgh.com",
    img:"./image/pro.png",
    type:"OnSite",
    deadline: "7th November",
    msg:
      "As a Front-end Developer Intern, you will be responsible for implementing visual elements that users see and interact within a web application, which makes your role crucial for the success of our business. We love Typescript at KPILENS and work with some of the latest JS technologies in the ecosystem",
  }


];

// const modal = document.getElementById("exampleModal")
list.forEach((val, ind) => {
  $("#jobs-list-container").append(`
  <div class="col-md-3 mb-3">
  <div class="card m-auto " style='width: 16rem;'>
      <div class="card-body">
        <img src="${val.img}" class="com_logo mb-3" alt="...">
        <h5 class="card-title">${val.job_title}</h5>
        <div class="job_info">
      
          <p><span>Job Type: </span> ${val.type}</p>
        
          <p>Accra,GH</p>
           <p class="text-info"> <span> Deadline: ${val.deadline}</span> </p>

      </div>
        <a href="#" class="btn btn-primary btn-block btn-sm jobs-read-more-btn" data-apply="${val.onApply}" data-toggle="modal" data-title="${val.job_title}" data-msg="${val.msg}" data-target="#exampleModal">Read More</a>
      </div>
    </div>
</div>
  `);
  $(".jobs-read-more-btn").on("click", function (e) {
    $("#exampleModal .modal-title").html($(this).data("title"));
    $("#exampleModal #body_msg").html($(this).data("msg"));
    $("#apply_job").attr("href", $(this).data("apply"));
  });
});
