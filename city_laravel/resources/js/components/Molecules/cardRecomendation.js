import React from 'react'

const CardRecomendation = ({ dataInfo, title, idCard, show, idHeader, expander, infoRecomendation }) => {

    return (
        <div className="card-faq card">
            <button
                className="btn-faq btn"
                data-toggle="collapse"
                data-target={`#${idCard}`}
                aria-expanded={expander}
                aria-controls={idCard}>
                <div className="card-faq-header card-header" id={idHeader}>
                    <h5 className="mb-0">
                        {title}
                    </h5>
                </div>
            </button>

            <div id={idCard} className={`collapse ${show}`} aria-labelledby={idHeader} data-parent="#accordion">
                <div className="card-body">
                    {
                        dataInfo.map(
                            (item, i) => <div key={i} className="mt-3 mb-3">
                                <div className="title-text-pdf">
                                    <label>
                                        {item.name}
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <strong>Puntaje:</strong>  {item.average}
                                    </label>
                                </div>
                                <div>
                                    <div className="subtitle-text-pdf">
                                        Recomendaciones
                                    </div>
                                    {
                                        infoRecomendation.find(
                                            recomendation => recomendation.title === item.name
                                        ) === undefined &&
                                        <label>
                                            No se tiene ninguna recomendación
                                        </label>

                                    }
                                    {
                                        infoRecomendation.find(
                                            recomendation => recomendation.title === item.name
                                        )  !== undefined &&
                                        <label>
                                            {infoRecomendation.find(
                                                recomendation => recomendation.title === item.name
                                            ).recomendation}
                                        </label>

                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default CardRecomendation;