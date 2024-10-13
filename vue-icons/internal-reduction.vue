
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44771 20.5523 3 20 3H4C3.44771 3 3 3.44771 3 4V20C3 20.5523 3.44771 21 4 21Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M21 4C21 3.44771 20.5523 3 20 3H14V10H21V4Z" fillRule="evenodd" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M6.5 17.5H10M11.5 12.5L6.5 17.5L11.5 12.5ZM6.5 17.5V14V17.5Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'internal-reduction',
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
  