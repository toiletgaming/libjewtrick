const fetch = require( "node-fetch" );

class JewTrickAPI
{
	Status( callback )
	{
		try
		{
			fetch( "http://server.jewtrick.xyz/jewtrickstatus.html" )
				.then( res => res.text( ) )
				.then( body => callback( false, body ) )
				.catch( error => callback( true, error ) );
		}
		catch( error )
		{
			callback( true, error );
		}
	}

	async StatusAsync( )
	{
		try
		{
			const response = await fetch( "http://server.jewtrick.xyz/jewtrickstatus.html" );
			const text = await response.text( );

			return text;
		}
		catch( error )
		{
			return error;
		}
	}

	Online( callback )
	{
		try
		{
			fetch( "http://server.jewtrick.xyz/jew_online.html" )
				.then( res => res.text( ) )
				.then( body => callback( false, body ) )
				.catch( error => callback( true, error ) );
		}
		catch( error )
		{
			callback( true, error );
		}
	}

	async OnlineAsync( )
	{
		try
		{
			const response = await fetch( "http://server.jewtrick.xyz/jew_online.html" );
			const text = await response.text( );

			return text;
		}
		catch( error )
		{
			return error;
		}
	}
}

module.exports = JewTrickAPI;