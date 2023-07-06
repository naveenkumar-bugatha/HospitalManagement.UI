import './pop-up.scss';

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
}

export function Popup(props: PopupProps) {

    const { isOpen, onClose } = props;

    if (!isOpen) {
        return null; // Don't render anything if the popup is closed
    }

    return (
        <div className="popup-container">
            <div className="popup-content">
                <div>
                    <p style={{float:'right',marginLeft:'30px', cursor:'pointer'}} onClick={onClose}>X</p>
                    <h2 style={{marginTop: '15px'}}>Delete patient</h2>
                </div>
                <hr/>
                <p className='pop-warning-message'>Are you sure to delete the patient record?</p>
                <button className='pop-button' style={{float:'right', marginRight:'20px'}} onClick={onClose}>Delete</button>
            </div>
        </div>
    );
}
