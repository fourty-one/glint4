import JustValidate from 'just-validate';
import vars from '../_vars';

const validation = 
	new JustValidate('.contact__form')
	  .addField('#name', [
	  	{
	      rule: 'required',
	      errorMessage: 'Name is required',
	    },
	    {
	      rule: 'minLength',
	      value: 3,
	    },
	    {
	      rule: 'maxLength',
	      value: 30,
	    },
	  ])
	  .addField('#email', [
	    {
	      rule: 'required',
	      errorMessage: 'Email is required',
	    },
	    {
	      rule: 'email',
	      errorMessage: 'Email is invalid',
	    },
	  ])
	  .addField('#subject', [
	    {
	      rule: 'minLength',
	      value: 3,
	    },
	  ])
	  .addField('#message', [
	    {
	      rule: 'minLength',
	      value: 1,
	    },
	  ]);