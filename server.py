import http.server
import argparse
import posixpath

class myhandler(http.server.SimpleHTTPRequestHandler):
    def guess_type(self, path):
        base, ext = posixpath.splitext(path)
        if ext == ".js":
            return "application/javascript"
        else:
            return super().guess_type(path)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--cgi', action='store_true',
                       help='Run as CGI Server')
    parser.add_argument('--bind', '-b', default='', metavar='ADDRESS',
                        help='Specify alternate bind address '
                             '[default: all interfaces]')
    parser.add_argument('port', action='store',
                        default=8000, type=int,
                        nargs='?',
                        help='Specify alternate port [default: 8000]')
    args = parser.parse_args()
    if args.cgi:
        print("we don't handle CGI")
        exit(1)
        handler_class = CGIHTTPRequestHandler
    else:
        handler_class = myhandler
    http.server.test(HandlerClass=handler_class, port=args.port, bind=args.bind)


