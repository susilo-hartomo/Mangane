import React from 'react';
import { Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { deleteFavourite } from '../store/actions/mangaAction'
import { connect } from 'react-redux'

const Favourites = (props) => {
    console.log('props: ', props);
    const history = useHistory()
    const { mangaFavourites } = props
    console.log('mangaFavourites: ', mangaFavourites);

    const deleteFavourite = (mangaFavourite) => {
        props.deleteFavourite(mangaFavourite)
    }

    const viewDetail = (manga) => {
        history.push({ pathname: `/detail/${manga.id}`, state: { manga } })
    }

    if (mangaFavourites.length === 0) {
        return (
            <div className="container">
                <div className="alert alert-info mt-4 p-2">
                    <span className="strong">Dont have favourite Manga</span>
                </div>
            </div>
        )
    }

    return (
        <div className="container mt-4">
            <h4 className="m-4">List Manga Favourite</h4>
            <div className="row">
                {mangaFavourites.map(el => {
                    return (
                        <>
                            <div key={el.id} className="col-md-3 col-sm-6 justify-content-around p-2">
                                <Card style={{ width: 'inherit', padding: '0px', margin: '4px' }}>
                                    <Card.Img variant="top" src={el.attributes.posterImage.small} />
                                    <Card.Body>
                                        <div className="row w-100">
                                            <div className="col-10">
                                                <Card.Title className="mb-3 text-left" style={{ height: "60px" }}>{el.attributes.titles.en_jp}</Card.Title>
                                            </div>
                                            <div className="col-2">
                                                <button className="btn btn-danger" value={el} key={el.id} onClick={() => deleteFavourite(el)}>
                                                    <i className="fa fa-heart" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </div>
                                        <Card.Text className='text-left'> Rating : {el.attributes.averageRating} </Card.Text>
                                        <Button className="btn btn-primary w-100" value={el} key={el.id} onClick={() => viewDetail(el)}>
                                            Detail
                                    </Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        mangaFavourites : state.MangaReducer.mangaFavourites
    }
}

// const mapDispacthToProps = (dispatch) => {
//     return {
//         del: (manga) => dispatch( deleteFavourite(manga) )
//     }
// }
const mapDispacthToProps = {
    deleteFavourite
}

export default connect(mapStateToProps, mapDispacthToProps)(Favourites)
