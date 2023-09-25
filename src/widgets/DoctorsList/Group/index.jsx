// components
import GroupSeparator from '@ui/GroupSeparator';
import PersonList from '@components/PersonList';

// helpers
import {depsOptions} from '@constants/options';

export default function Group({arr, variant, ...props}) {
    // get unique departments list
    const deps = [...new Set(arr.flatMap(item => item.department.map(item => item.id)))];
    // filter by department
    const arrByDep = dep => arr.filter(item => item.department.some(item => item.id === dep));

    return (
        <>
            {
                deps.map(dep => {
                    const label = depsOptions.find(item => item.value === dep).label;
                    return (
                        <div key={dep}>
                            <GroupSeparator text={label}/>
                            <PersonList arr={arrByDep(dep)} type={variant} gender={props.gender} deps={props.deps} />
                        </div>
                    )
                })
            }
        </>
    )
}