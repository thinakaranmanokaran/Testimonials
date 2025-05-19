import React from 'react'
import { DocsParagrabh, DocsTitle } from '../../../components'

const GettingStarted = () => {
    return (
        <div className='w-full' >
            <div className=' space-y-8 ' >
                <DocsTitle />
                <div className=' space-y-4 ' >
                    <DocsParagrabh paragrabh=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta iusto magnam voluptatibus esse, laudantium voluptas ab. Provident beatae, cumque suscipit iure atque minima voluptate animi voluptas cum, " />
                    <DocsParagrabh paragrabh=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta iusto magnam voluptatibus esse, laudantium " />
                    <DocsParagrabh paragrabh=" doloribus dolorum deserunt. Quisquam voluptate illo, quos praesentium dolores laudantium et?" />
                </div>
                <DocsTitle title='Install' size='4xl' />
            </div>
        </div>
    )
}

export default GettingStarted