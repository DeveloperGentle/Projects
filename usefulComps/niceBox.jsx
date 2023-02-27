import './components/component.css'
import deleteI from './icons/delete.svg'
import pen from './icons/pen.svg'
export default function StyledDiv(props) {
    return (
        <div style={{minHeight: '120px'}}>
  <div className="collapse collapse-horizontal" id="collapseWidthExample">
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm" style={{width: '300px',paddingBottom:'10px'}}>
      {props.content}
      <div className='flex gap-2 items-center iconsD mt-5' style={{marginLeft:'220px'}}><img src={deleteI} title='delete note' style={{width:'20px',cursor:'pointer'}} alt='del'/><img src={pen} title='edit note' style={{width:'20px',cursor:'pointer'}} alt='pen'/></div> 
    </div>
  </div>
  
</div>
    )
}
{/* <div className='flex gap-2 items-center iconsD' style={{}}><img src={deleteI} style={{width:'20px'}} alt='del'/><img src={pen} style={{width:'20px'}} alt='pen'/></div> */}
