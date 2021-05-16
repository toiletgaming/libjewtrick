# libjewtrick
jewtrick.xyz API for NodeJS

# Installation
`npm install libjewtrick`

# States
Status/StatusAsync function will return one of the following states:
> 0 - couldn't ping 2b2t

> 1 - can't connect to 2b2t because the player count is too high

> 2 - can connect to 2b2t

# Examples
Async:
```
const JewTrickAPI = require( "libjewtrick" );
var jewtrick = new JewTrickAPI( );

async function Test( )
{
  const status = await jewtrick.StatusAsync( );
  const online = await jewtrick.OnlineAsync( );
  
  console.log( "Status: " + status );
  console.log( "Online: " + online );
}

Test( );
```

Non-async:
```
const JewTrickAPI = require( "libjewtrick" );
var jewtrick = new JewTrickAPI( );

function Test( )
{
  jewtrick.Status(
  function( error, status )
  {
    if( error )
      console.error( "Failed to get status: " + status );
    else
    {
      jewtrick.Online(
      function( onlineerror, online )
      {
        if( onlineerror )
          console.error( "Failed to get online: " + online );
        else
        {
          console.log( "Status: " + status );
          console.log( "Online: " + online );
        }
      } );
    }
  } );
}

Test( );
```

```
const JewTrickAPI = require( "libjewtrick" );
var jewtrick = new JewTrickAPI( );

function Test( )
{
  jewtrick.Status(
  function( error, response )
  {
    if( error )
      console.error( "Failed to get status: " + response );
    else
      console.log( "Status: " + response );
  } );

  jewtrick.Online(
  function( error, response )
  {
    if( error )
      console.error( "Failed to get online: " + response );
    else
      console.log( "Online: " + response );
  } );
}

Test( );
```
