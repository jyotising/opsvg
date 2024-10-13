
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M2.5 4C2.5 3.44771 2.94771 3 3.5 3H9.5L12 6H20.5C21.0523 6 21.5 6.4477 21.5 7V20C21.5 20.5523 21.0523 21 20.5 21H3.5C2.94771 21 2.5 20.5523 2.5 20V4Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M12.5 17C14.433 17 16 15.433 16 13.5C16 11.567 14.433 10 12.5 10C10.567 10 9 11.567 9 13.5C9 15.433 10.567 17 12.5 17Z" stroke="#333333" strokeWidth="2"/>
	<path d="M13.5 12.5L11.5 14.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'folder-block',
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
  