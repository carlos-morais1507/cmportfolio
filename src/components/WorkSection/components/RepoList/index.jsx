import React, { useEffect, useState } from 'react'
import { RepoContent,
    RepoListSt,
    RepoListLi,
    RepoLiDesc,
    RepoLiBtn,
} from '../../../../styles/elementStyles'

const RepoList = () => {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/carlos-morais1507/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return (
        <RepoContent>
            <RepoListSt>
            {repositories.map(repository => {
                if(repository.name === "carlos-morais1507"){
                    return(null)
                }
                return(
                    <RepoListLi key={repository.id} >
                        <h3>{repository.name}</h3>
                        <RepoLiDesc>{repository.description}</RepoLiDesc>
                        <RepoLiBtn target='blank' href={repository.html_url}>// Github Link</RepoLiBtn>
                    </RepoListLi>
                )})
            }
            </RepoListSt>
        </RepoContent>
    
    )
}

export default RepoList