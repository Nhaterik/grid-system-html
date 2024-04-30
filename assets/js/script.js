const Btn=function({title,link,click}) {
    let Component='button'
    let obj={}
    if(link)
    {
        Component='a'
        obj.href=link
    }
    if(click)
    {
        
        obj.onClick=click
    }
    return (
        <Component {...obj}> 
            {title}
        </Component>
    )
}
function App(){
   return (
    <React.Fragment>
        <Btn
        title="click"
        link='fb.com'
        click={()=>console.log('ok')}
        />
    </React.Fragment>
   )
}
ReactDOM.render(<App/>,document.querySelector('#root'))