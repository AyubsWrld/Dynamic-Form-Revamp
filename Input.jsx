
function input_form(props){ 
    return(
        <div className="input-boxes"> 
            <label >{props.content}</label>
            <input type="text" placeholder = {props.placeholder}/>
        </div>


    );
}; 

export default input_form;