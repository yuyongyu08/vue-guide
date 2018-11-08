import ComponentA from './ComponentA'
import ComponentB from './ComponentA'

export default {
    name: 'my-local-component-b',
    template:
        `<div>
               这是个局部组件ComponentC，引用了ComponentA和ComponentA
               <component-a></component-a>
               <component-b></component-b>
        </div>`,
    components: {
        ComponentA,
        ComponentB
    }
};