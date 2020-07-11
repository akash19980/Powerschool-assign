const search= document.getElementById('search');
const matchList= document.getElementById('match-list');

//search in states.json and filter it
const searchStates=async searchText=>{
const res=await fetch('../data/states.json');
const states=await res.json();
//Get matches to current Text Input
let matches=states.filter(state =>
    {
        const regex= new RegExp(`^${searchText}`,'gi');
        if(!state.name.match(regex))
        {
            searchText.length=0;
            return;
            
        }
        return state.name.match(regex) || state.abbr.match(regex);
    });
if(searchText.length===0)
{
    matches=[];
    matchList.innerHTML='';
}

    outputHtml(matches);

}
const outputHtml= matches =>
{
    if(matches.length>0)
    {
        const html=matches.map(match=>`
        <div class="card card-body mb-1" name="clicksave">
         <h4> ${match.name} (${match.abbr}) <span class="text-primary">       ${match.capital}          </span> </h4> </option>
                       
           </div>
        `).join('');
matchList.innerHTML=html;

        console.log(html);
    }
}

search.addEventListener('input',()=> searchStates(search.value));


