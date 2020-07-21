import React from 'react';

export default function MangaDetail(props) {
    return (
        <div>
            {props.manga.attributes.synopsis}
        </div>
    )
};
