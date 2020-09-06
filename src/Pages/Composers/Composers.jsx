import React, { useEffect, useState, Fragment } from 'react'
import $ from 'jquery'
import { Button, StylesProvider } from '@material-ui/core'

// import axios from 'axios'
var composers_JS = require('../../Data/composers')

const composers = composers_JS.composers
const french_composers = composers['French Composers']
const russian_composers = composers['Russian Composers']


const styles = {
    oneComposer: {
        background: 'aliceblue'
    },
    compositionalStyle: {
        display: 'inline-flex'
    }
}

export default function Composers() {

    // const [questionRecords, setQuestionRecords] = useState('')

    // 把问题装上渲染器
    const [mountedQuestion, mountQuestion] = useState('')

    const [choices, setChoices] = useState([''])

    const [answerCheck, SetAnswerCheck] = useState('')

    const [quizStartedBool, setQuizStart] = useState(false)

    useEffect(() => {
        console.log('composers')
        console.log(composers)


        let composer_nationalities = Object.keys(composers)
        console.log('composer_nationalities (array)')
        console.log(composer_nationalities)

        for (var item of composer_nationalities) {
            console.log(composers[item])
        }

    }, [composers])

    return (
        <div>
            {Object.keys(french_composers).map((item, key) => (

                <div style={styles.oneComposer}>

                    <h4 className='composer-name'>{item}</h4>

                    <div className='composer-compositional-style' styles={styles.compositionalStyle}>
                        <div>Style:</div>

                        <div>{french_composers[item].style.map((stl, k) => (
                            <p>{stl}</p>
                        ))}</div>

                    </div>

                    <div>

                    </div>

                </div>

            ))}


            {Object.keys(russian_composers).map((item, key) => (

                <div style={styles.oneComposer}>

                    <h4 className='composer-name'>{item}</h4>

                    <div className='composer-compositional-style' styles={styles.compositionalStyle}>
                        <div>Style:</div>

                        <div>{russian_composers[item].style.map((stl, k) => (
                            <p>{stl}</p>
                        ))}</div>

                    </div>

                    <div>

                    </div>

                </div>

            ))}



        </div>

    )
}
