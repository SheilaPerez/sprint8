import {ViewMoreBtn, DivView} from '../Styles/styled'

const ViewMore = ({ handleClickNext }) => {
    return (
        <DivView>
            <ViewMoreBtn type="button" onClick={handleClickNext}>view more</ViewMoreBtn>
        </DivView>
    )
}

export default ViewMore;