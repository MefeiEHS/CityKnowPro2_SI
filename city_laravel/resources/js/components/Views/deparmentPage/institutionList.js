import React, { useEffect, useState } from 'react'

import { fetchApi } from '../../../function/GlobalFunctions'

import TittleTab from '../../Atoms/tittleTab'
import ListInfo from '../../Organisms/listInfo/listInfo'
import LoadingPage from '../loadingPage/loadingPage'

const InstitutionList = ({ idForFetch }) => {
    const [dataForList, setDataForList] = useState([]);
    const [isLoaded, setisLoaded] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchData();
    }, [idForFetch])


    async function fetchData() {
        try {
            const result = await fetchApi(`https://raw.githubusercontent.com/DuvanMorenoCardona/json/master/tableList1.json`)
            result.List.map(
                (item) => {
                    let dataInstitution = []
                    // add info institution into array dataInstitution for concat at dataForList
                    dataInstitution.push(item.name, item.town, item.Matematicas, item.Lenguaje, item.Competencias, item.Ingles, item.Sociales, item.Naturales)
                    setDataForList(dataForList => [...dataForList, dataInstitution])
                }
            )
            setisLoaded(false)
        } catch (error) {
            setisLoaded(true)
            setError(error)
        }
    }

    const tittlesList = [
        "Nombre de institución",
        "Municipio",
        "Matematicas",
        "Lenguaje",
        "Competencias ciudadanas",
        "Inglés",
        "Sociales",
        "Naturales"
    ]

    if (isLoaded) {
        return (<LoadingPage />)
    } else {
        return (
            <div>
                <TittleTab tittle={'Listado de instituciones'} />
                <ListInfo tittleList={tittlesList} contentList={dataForList} />
            </div>
        )
    }

}

export default InstitutionList;