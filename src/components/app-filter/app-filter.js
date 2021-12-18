 import  './app-filter.css'; 
 function AppFilter() {
     return (
         <div className="btn-group">
             <button 
             className="btn btn-light"
             type="button">
                 Все сотрудники
             </button>
             <button 
             className="btn btn-outline-light"
             type="button">
                 Сотрудники на повышение
             </button>
             <button 
             className="btn btn-outline-light"
             type="button">
                 Зарплата выше 1000$
             </button>
         </div>
     )
 }

 export default AppFilter;