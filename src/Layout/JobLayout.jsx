import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

function JobLayout() {
    useEffect(() => {
        const search = document.getElementById('inpt');

        search.addEventListener('input', () => {
            let value = search.value.toLowerCase();

            document.querySelectorAll('.indi').forEach(card => {
                let title = card.innerHTML.toLowerCase();

                card.style.display = title.includes(value) ? "block" : "none";
            })
        })
    })
    return (
    <div>
        <div style={{textAlign: 'center'}}>
            <h1 style={{textDecoration: 'underline'}}>Job openings</h1><br />
            <input type="text" name="" id="inpt" placeholder='Search'/><br /><br />
            <h4>List of jobs available:</h4>
        </div>
        <Outlet/>
    </div>
    )
}

export default JobLayout