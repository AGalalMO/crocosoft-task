import Button from 'react-bootstrap/Button';
export default function Header ({ handleOpenModal }: {
    handleOpenModal:VoidFunction
}) {
    
    return (
      <div className='d-flex flex-row w-100  bg-dark justify-content-between align-items-center px-4 py-2'>
                
                <p className='text-white mb-0'> Quiz List</p>

                 <Button variant="primary" onClick={handleOpenModal}>
        Create Quiz
      </Button>
            </div>
        
    )
}