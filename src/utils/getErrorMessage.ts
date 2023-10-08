import { isAxiosError } from 'axios';
import { ToastContentProps } from 'react-toastify';

export default function getErrorMessage({ data }: ToastContentProps<Error>) {
	if (isAxiosError(data)) {
		return data?.response?.data.error;
	}

	return 'Houve uma falha inexperada';
}
