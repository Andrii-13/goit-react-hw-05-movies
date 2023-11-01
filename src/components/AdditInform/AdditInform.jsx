import React from 'react'
import { AddInfoList } from '../../Pages/MovieDetails/MoveDetails.styled'
import CastLink from 'components/CastLink/CastLink'
import ReviewsLink from 'components/ReviewsLink/ReviewsLink'
import { AdditInformWrap } from './AdditInform.styled'

const AdditInform = () => {
  return (
    <AdditInformWrap>
      <h3>Additional information</h3>
            <AddInfoList>
              <CastLink />
              <ReviewsLink />
            </AddInfoList>
    </AdditInformWrap>
  )
}

export default AdditInform