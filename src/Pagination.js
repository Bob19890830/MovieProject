
const Pagination = (props) => {

    const pageStyle = {
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px',
    }

    return(
        <div className='Pagination' style={pageStyle}>
            <button className='page-button' onClick={props.handlePrev}>Prev Page</button>
            <div style={{margin:'5px'}}>{props.currentPage} / {props.totalPages}</div>
            <button className='page-button' onClick={props.handleNext}>Next Page</button>
        </div>
    )
}

export default Pagination;