import React,{useState} from 'react';
import { FormGroup, Input, Label } from "reactstrap";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { createProfile, deleteData } from '../../actions/profile';



const Dashboard = ({ 
  createProfile:createProfileForUser,
   deleteData
  
}) => {
  const [ formData, setFormData ] = useState({
    username: "",
    mobilenumber: "",
    email: "",
    address: ""
  });

  const {
    username,
    mobilenumber,
    email,
    address
   } = formData;

   
   const handleChange = (fieldName, fieldValue) => setFormData({...formData, [fieldName]: fieldValue});

   const onSubmit = e => {
    e.preventDefault();
    createProfileForUser(formData);
 };
 console.log(formData);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
  
    <div className="container" >
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </button>
       
      </div>

      <div className="content-tabs">

        {/* User Form */}
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>User Form</h2>
          <hr />
        
             <form className="form mt-3" >

                 <FormGroup>
                 <Label>User Name</Label><br/>
                  <Input 
                    type="text" 
                    name="username" 
                    placeholder="*username" 
                    value={username} 
                    onChange={e => handleChange("username", e.target.value)} 
                  />
                 </FormGroup>

                 <FormGroup>
                 <Label>Mobile Number</Label><br/>
                  <Input 
                    name="mobilenumber" 
                    placeholder="*mobile number"  
                    value={mobilenumber} 
                    onChange={e => handleChange("mobilenumber", e.target.value)} 
                  />
                 </FormGroup>

                 <FormGroup>
                 <Label>Email</Label><br/>
                  <Input 
                    type="email" 
                    name="email" 
                    placeholder="*email" 
                    value={email} 
                    onChange={e => handleChange("email", e.target.value)}  
                  />
                 </FormGroup>

                 <FormGroup>
                 <Label>Address</Label><br/>
                  <Input 
                    type="text" 
                    name="address" 
                    placeholder="*address"  
                    value={address} 
                    onChange={e => handleChange("address", e.target.value)} 
                  />
                 </FormGroup><br/>

          <Input
          
             type="submit"
             name="submit"
             className="btn btn-dark"
             onClick={onSubmit}
          
             />

             </form>
          
        </div>



        {/* User Data */}
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>User Data</h2>
          <hr />
          
          <form className="form mt-3" >

            <FormGroup>
            <Label>User Name</Label><br/>
            <Input 
            type="text" 
            name="username" 
            placeholder="*username" 
            value={username} 
            onChange={e => handleChange("username", e.target.value)} 
            readOnly
            />
           </FormGroup>

          <FormGroup>
          <Label>Mobile Number</Label><br/>
           <Input 
           name="mobilenumber" 
           placeholder="*mobile number"  
           value={mobilenumber} 
          onChange={e => handleChange("mobilenumber", e.target.value)} 
          readOnly
          />
          </FormGroup>

          <FormGroup>
          <Label>Email</Label><br/>
          <Input 
           type="email" 
           name="email" 
          placeholder="*email" 
          value={email} 
          onChange={e => handleChange("email", e.target.value)}  
          readOnly
          />
           </FormGroup>

          <FormGroup>
          <Label>Address</Label><br/>
            <Input 
            type="text" 
            name="address" 
            placeholder="*address"  
            value={address} 
            onChange={e => handleChange("address", e.target.value)} 
            readOnly
            />
          </FormGroup><br/>
          <button type="button" class="btn btn-dark" 
          style={{backgroundColor: "red"}}
          onClick={() => {deleteData() 
            setFormData({username: "",
            mobilenumber: "",
            email: "",
            address: ""})
          }}
          >Delete</button>

        </form>
          
        </div>

       
      </div>
      
    </div>


  );
}

Dashboard.propTypes = {
  createProfile: PropTypes.func.isRequired,
  deleteData: PropTypes.func.isRequired
  
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, deleteData })(Dashboard);