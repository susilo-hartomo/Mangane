import React from 'react'
import { connect } from 'react-redux'

const DetailManga = (props) => {
    const { manga } = props
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4 p-4">
                        <div className="card">
                            <img className="card-img-top" src={manga.attributes.posterImage.large} alt="manga" />
                        </div>
                    </div>
                    <div className="col-8 p-4">
                        <div className="card p-4 text-left">
                            <h3 className="mb-2">{manga.attributes.canonicalTitle}</h3>
                            <div className="d-flex">
                                <div className="card p-2 my-2 mr-4 text-muted align-middle" style={{ "flex-direction": "row", "align-items": "center", border: "none" }}>
                                    <i class="fa fa-eye mr-3" aria-hidden="true" />
                                    <h6 className="mt-2">{manga.attributes.userCount} views</h6>
                                </div>
                                <div className="card p-2 m-2 mr-4 text-muted align-middle" style={{ "flex-direction": "row", "align-items": "center", border: "none" }}>
                                    <i class="fa fa-thumbs-up mr-3" aria-hidden="true" />
                                    <h6 className="mt-2">{manga.attributes.favoritesCount} likes</h6>
                                </div>
                                <div className="card p-2 m-2 mr-4 text-muted align-middle" style={{ border: "none" }}>
                                    <h6 className="mt-2 text-info">{manga.attributes.status}</h6>
                                </div>
                            </div>
                            <p>{manga.attributes.synopsis}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state.MangaReducer,
        manga: state.MangaReducer.mangaDetail
    }
}

export default connect(mapStateToProps)(DetailManga)
