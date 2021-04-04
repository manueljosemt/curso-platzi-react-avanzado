import {withPhotos} from '../hoc/withPhoto'
import {ListOfPhotoCardsComponent} from '../components/ListOfPhotoCards'

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)