require 'sinatra'
require 'httparty'
require 'URI'

get '/' do
	send_file File.join(settings.public_folder, 'home.html')
end

get '/preview' do
	url = URI(params[:gist_url]);
	if url.to_s =~ URI::regexp and url.host == "gist.githubusercontent.com" and ['http', 'https'].include? url.scheme
		html = HTTParty.get(params[:gist_url])
		html.body
	else
		redirect '/#error'
	end
end