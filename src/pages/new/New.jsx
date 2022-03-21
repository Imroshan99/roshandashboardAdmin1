import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Button from '@mui/material/Button';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import TextField from '@mui/material/TextField';
import "./New.scss"
import { useState } from "react";

const New = (props) => {
  const [file,setFile]=useState("")
  console.log("ffffile",file)
  const alldata=props.inputs
  return (
    <div className="new">
      <div className='home'>
        <Sidebar/>
        <div className="homecontainer">
        <Navbar/>
          <div className="main-new" >
            <div className="add-new-user">
                <div className="news">{props.title}</div>
            </div>
            <div className="form-div">
                <div className="imgform">
                  <img src={file ? URL.createObjectURL(file) : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"} alt="" />
                </div>
                <div className="formsepdiv1" >
                  <label htmlFor="fileupload">
                    Image:
                    <DriveFolderUploadIcon style={{cursor:"pointer"}}/>
                  </label>
                  <input type="file" onChange={e=>setFile(e.target.files[0])} id="fileupload" style={{display:"none"}} />
                  {alldata.map((datas)=>{
                    return <div className="middleform" key={datas.id}>
                      <label>{datas.label}</label>
                      <input type={datas.type} placeholder={datas.placeholder}/>
                    </div>
                  })}
                  {/* <TextField id="filled-basic" type="text" label="Name" variant="filled" />
                  <TextField id="filled-basic" type="text"  label="Phone" variant="filled" />
                  <TextField id="filled-basic" type="text" label="Address" variant="filled"
                  autoComplete="off" />  */}
                  <Button type="submit" className="btn-form" style={{color:"#019267"}} variant="outlined" >Submit</Button>
                </div>
                <div className="formsepdiv2">
                <TextField id="filled-basic" type="text" label="Username" variant="filled" />
                <TextField id="filled-basic" type="email" label="Email" variant="filled" />
                <TextField id="filled-basic" type="password" label="Password" variant="filled" />
                <TextField id="filled-basic" label="Country" variant="filled" />
                </div>
            </div>
          </div>
    </div>
    </div>
  </div>
  )
}

export default New