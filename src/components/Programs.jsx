

import SectionHead from './SectionHead'
import {programs} from '../data'
import Card from '../UI/Card'


const Programs = () => {
    return (
        <section className="programs">
            <div className="container programs_container">
                <SectionHead title="Events"/>
           
            <div className="programs_wrapper">
                {
                    programs.map(({id, title, info, path}) => {
                        return (
                            <Card className="programs_program key={id}">
                                <h4>{title}</h4>
                                <small>{info}</small>
                            </Card>
                        )
                    })
                }

            </div>
            </div>
        </section>
    )
}