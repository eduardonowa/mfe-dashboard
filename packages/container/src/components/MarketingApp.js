import { mount } from 'marketing/MarketingApp'
import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default () => {
    const ref = useRef(null)
    const history = useHistory()

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => { //Atualiza a url atual para a que é exibida no marketing
                const {pathname} = history.location

                if(pathname !== nextPathname){ //valida a url atual pra não entrar em loop
                    history.push(nextPathname)
                }
            }
        })
        history.listen(onParentNavigate)
    },[])

    return <div ref={ref}/>
}