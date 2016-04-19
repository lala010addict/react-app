/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const Search = require('../js/Search')
const { shallow, mount} = require('enzyme')
const ShowCard = require('../js/ShowCard')
const { shows } = require('../public/data')
describe('<Search />', () => {
     it('should render the brand', () => {
	                // expect(1 + 1 === 2).to.be.true
	                const wrapper = shallow( <Search / > )
	               // console.log(wrapper.debug())
	                    //is the brand getting rendered
	                expect(wrapper.contains( <h1 className = 'brand' >svideo</h1>)).to.be.true
	                })	   


     it('should render as many shows', () =>{
     	const wrapper = shallow(<Search />)
     	expect(wrapper.find(ShowCard).length).to.equal(shows.length)




     })


     it('should filer correctly given new this.state', () =>{
     	const wrapper = mount(<Search />)
     	const input = wrapper.find('.search-input')
     	input.node.value = 'house'
     	input.simulate('change')
     	expect(wrapper.state('searchTerm')).to.equal('house')
     	expect(wrapper.find('.show-card').length).to.equal(2)


     })

 })

































