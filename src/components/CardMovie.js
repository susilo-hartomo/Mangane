import React, { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom'
import { getManga, addFavourite, detailManga } from '../store/actions/mangaAction'
import { connect } from 'react-redux'

const CardMovie = (props) => {
    const history = useHistory()

    const isFavourite = (el) => {
        return props.mangaFavourites.filter(manga => manga.id === el.id).length > 0 ? 'btn-danger' : 'btn-secondary'
    }

    const { allManga } = props
    console.log('props: ', props);
    console.log('allManga: ', allManga);

    useEffect(() => {
        props.getManga()
    }, [])

    const addFavourite = (mangaFavourite) => {
        props.addFavourite(mangaFavourite)
    }

    const detailManga = (manga) => {
        props.detailManga(manga)
    }

    // if (error) {
    //     return (
    //         <h2 className="justify-content-center mx-auto mt-4">
    //             Data Not Found
    //         </h2>
    //     )
    // } else 
    if (allManga.length === 0) {
        return (
            <div className="justify-content-center mx-auto mt-4">
                <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
                </div>
                <h2 className="">Loading...</h2>
            </div>
        )
    }

    return (
        allManga.map(el => {
            return (
                <>
                    {<div key={el.id} className="col-md-3 col-sm-6 justify-content-around p-2">
                        <Card style={{ width: 'inherit', padding: '0px', margin: '4px' }}>
                            <Card.Img variant="top" src={el.attributes.posterImage.small} />
                            <Card.Body>
                                <div className="row w-100">
                                    <div className="col-10">
                                        <Card.Title className="mb-3 text-left" style={{ height: "60px" }}>{el.attributes.titles.en_jp}</Card.Title>
                                    </div>
                                    <div className="col-2">
                                        <button className={`btn ${isFavourite(el)}`} value={el} key={el.id} onClick={() => addFavourite(el)}>
                                            <i className="fa fa-heart" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                                <Card.Text className='text-left'> Rating : {el.attributes.averageRating} </Card.Text>
                                <Link className="btn btn-primary w-100" to={`/detail/${el.id}`} key={el.id} onClick={() => detailManga(el)} >Detail LINK</Link>
                            </Card.Body>
                        </Card>
                    </div>}
                </>
            )
        })
    )
}

const mapStateToProps = (state) => {
    return {
        allManga: state.MangaReducer.allManga,
        mangaFavourites: state.MangaReducer.mangaFavourites
    }
}

const mapDispacthToProps = {
    addFavourite,
    getManga,
    detailManga,
}

export default connect(mapStateToProps, mapDispacthToProps)(CardMovie)