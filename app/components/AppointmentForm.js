import React from 'react';

const AppointmentForm = () => {
  return (
    <div className="form-container">
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">New Patient</a>
          <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Old Patient</a>
        </div>
      </nav>

      <div className="col-sm-12"></div>

      <div className="tab-content" id="nav-tabContent">
        {/* New Patient Form */}
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          <h2 className="semibold"><span>1</span>Provide your primary information about the following details.</h2>
          <form action="https://care.arssolutionsltd.co.uk/website/appointment/new_patient" id="appointmentForm" enctype="multipart/form-data" method="post" accept-charset="utf-8" />
 
 <div class="form-row">
     <div class="form-group col-md-6">
         <label>First Name*</label>
         <input type="text" class="form-control" name="firstname" id="firstname" placeholder="First Name" required="" />
     </div>
     <div class="form-group col-md-6">
         <label>Last Name*</label>
         <input type="text" class="form-control" name="lastname" id="lastname" placeholder="Last Name" required="" />
     </div>
 </div>

 <div class="form-row">
     <div class="form-group col-md-6">
         <label>Email Address*</label>
         <input type="email" class="form-control" name="email" id="email" placeholder="Email Address" required="" />
         <label>Please provide a valid email.</label>
     </div>
     <div class="form-group col-md-6">
         <label>Phone No</label>
         <input type="text" class="form-control" name="mobile" id="phone1" placeholder="Phone No" required="" />
     </div>
 </div>

 <div class="form-group">
     <label> Department Name *</label>
     <select name="department_id" class="form-control basic-single select2-hidden-accessible" id="departmentId" data-select2-id="departmentId" tabindex="-1" aria-hidden="true">
<option value="" selected="selected" data-select2-id="2">Select Department</option>
<option value="16">Oncology</option>
<option value="18">Pharmacy</option>
<option value="19">Radiotherapy</option>
<option value="21">Rheumatology</option>
<option value="22">Gynaecology</option>
<option value="23">Obstetrics</option>
<option value="25">General Surgery</option>
<option value="26">Pregnancy</option>
<option value="27">Surgery</option>
<option value="28">Psychology</option>
<option value="29">Therapy</option>
<option value="30">Nursing</option>
<option value="31">Cardiology</option>
<option value="32">X-rey</option>
</select><span class="select2 select2-container select2-container--bootstrap" dir="ltr" data-select2-id="1" ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-departmentId-container"><span class="select2-selection__rendered" id="select2-departmentId-container" role="textbox" aria-readonly="true" title="Select Department">Select Department</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
     <span class="doctorError"></span>
 </div>
 <h2 class="semibold"><span>2</span> Help us with accurate information about the following details</h2> 
 <div class="form-row">
     <div class="form-group col-md-6">
         <label> Doctor Name*</label>
             <select name="doctor_id" class="form-control basic-single select2-hidden-accessible" id="doctorId" data-select2-id="doctorId" tabindex="-1" aria-hidden="true">
<option value="0" data-select2-id="4"></option>
</select><span class="select2 select2-container select2-container--bootstrap" dir="ltr" data-select2-id="3" ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-doctorId-container"><span class="select2-selection__rendered" id="select2-doctorId-container" role="textbox" aria-readonly="true" title=""></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
          <p class="help-block" id="availableDays"></p>
     </div>
     <div class="form-group col-md-6">
         <label>Appointment Date *</label>
         <input type="text" class="form-control datepicker" name="date" id="date1" placeholder="Appointment Date" autocomplete="on" />
     </div>
 </div>

 <div class="form-group">
     <label>Serial No <i class="text-danger">*</i></label>
     <div id="serialPreview">
         <div class="btn btn-success disabled btn-sm"> 01</div>
         <div class="btn btn-success disabled btn-sm"> 02</div>
         <div class="btn btn-success disabled btn-sm"> 03</div>...
         <div class="slbtn btn btn-success disabled btn-sm"> N</div>

     </div>
     <input type="hidden" name="schedule_id" id="scheduleId" />
     <input type="hidden" name="serial_no" id="serialNo" />
 </div>

 <div class="form-group">
     <label>Problemsss</label>
     <textarea class="form-control" name="problem" rows="3">
        lorem
     </textarea>
 </div>
 <div class="form-group">
     <div class="custom-control custom-checkbox">
         <input type="checkbox" class="custom-control-input" id="customCheck1" required="" />
         <label class="custom-control-label" for="customCheck1">I consent to having this website store my submitted information so they can respond to my inquiry.</label>
     </div>
 </div>
 <button type="submit" class="btn btn-block btn-primary">Book Appointment</button>

        
        </div>

        {/* Old Patient Form */}
        
      </div>
    </div>
  );
};

export default AppointmentForm;
