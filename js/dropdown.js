const allDropdowns = document.querySelectorAll('.dropdown__')
if (allDropdowns) {
    allDropdowns.forEach(dropdown => {
        let minus = dropdown.querySelector('.minus')
        let plus = dropdown.querySelector('.plus')
        let dropdown_text = dropdown.querySelector('.dropdown_text')
        let dropdownList = dropdown.querySelector('.dropdown__list__')
        let dropdownListHeight = dropdownList.getBoundingClientRect().height
        let compStl = window.getComputedStyle(dropdownList)
        let currentpadding = compStl.getPropertyValue('padding')
        let dropdownListPadding = currentpadding
        dropdownList.style.height = '0px';
        dropdownList.style.overflow = 'hidden';
        dropdownList.style.padding = '0px'
        dropdownList.style.display = 'none';
       

        dropdown.addEventListener('click', () => {
            allDropdowns.forEach(dropdown2 => {
               
                minus.classList.add('hidden')
                plus.classList.remove('hidden')
                dropdown_text.classList.add('dropdown_text_active')
          

                
            })
            if (dropdown.classList.contains('active')) {
                dropdown.classList.remove('active')
                dropdownList.style.height = `0px`;
                dropdownList.style.padding = '0px'
                minus.classList.add('hidden')
                plus.classList.remove('hidden')
                dropdown_text.classList.remove('dropdown_text_active')
                let compStyle = window.getComputedStyle(dropdownList)
                let currentTransition = compStyle.getPropertyValue('transition-duration')
                setTimeout(() => {
                    dropdownList.style.display = 'none'
                }, currentTransition.slice(0, -1) * 1000)
            } 
            else if (!dropdown.classList.contains('active')) {
                dropdown.classList.add('active')
                dropdownList.style.display = 'flex';
                minus.classList.remove('hidden')
                plus.classList.add('hidden')
                
                setTimeout(() => {
                    dropdownList.style.height = `${dropdownListHeight}px`;
                    dropdownList.style.padding = `${dropdownListPadding}`;

                }, 50)
            }
            
        })
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown__')) {
                allDropdowns.forEach(dropdown2 => {
                    
                    let dropdownList2 = dropdown2.querySelector('.dropdown__list__')
                    dropdownList2.style.height = `0px`;
                    dropdownList2.style.padding = '0px';
                    dropdown_text.classList.remove('dropdown_text_active')
                    minus.classList.add('hidden')
                    plus.classList.remove('hidden')
                    let compStyle = window.getComputedStyle(dropdownList2)
                    let currentTransition = compStyle.getPropertyValue(
                        'transition-duration')
                    setTimeout(() => {
                        dropdownList2.style.display = 'none'
                    }, currentTransition.slice(0, -1) * 1000)
                })
            }
        })

    })
}
