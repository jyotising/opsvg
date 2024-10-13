
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M2.5 4C2.5 3.44771 2.94771 3 3.5 3H9.5L12 6H20.5C21.0523 6 21.5 6.4477 21.5 7V20C21.5 20.5523 21.0523 21 20.5 21H3.5C2.94771 21 2.5 20.5523 2.5 20V4Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M12.0001 10L13.1216 12.4564L15.8043 12.764L13.8147 14.5896L14.3512 17.236L12.0001 15.908L9.6489 17.236L10.1855 14.5896L8.1958 12.764L10.8786 12.4564L12.0001 10Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'folder-focus',
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
  