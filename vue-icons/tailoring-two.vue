
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M21 2.5H18.7071C18.2616 2.5 18.0385 3.03857 18.3535 3.35355L20.6464 5.64645C20.9614 5.96145 21.5 5.73835 21.5 5.2929V3C21.5 2.72386 21.2761 2.5 21 2.5Z" fill="#333333"/>
	<path d="M4 21.5H6.2929C6.73835 21.5 6.96145 20.9614 6.64645 20.6464L4.35356 18.3535C4.03857 18.0385 3.5 18.2616 3.5 18.7071V21C3.5 21.2761 3.72386 21.5 4 21.5Z" fill="#333333"/>
	<path d="M7 2V16C7 16.5523 7.4477 17 8 17H22" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M10.5 6.5H17.5V13.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M7 6.5H3" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M18 21V17" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'tailoring-two',
      props: {
        width: {
          type: String,
          default: '24px'
        },
        height: {
          type: String,
          default: '24px'
        }
      }
    };
    </script>
  