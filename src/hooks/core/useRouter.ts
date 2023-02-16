import { useNavigate, useLocation, useParams } from 'react-router-dom';

export default function useRouter() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  return { location, params, navigate };
}
