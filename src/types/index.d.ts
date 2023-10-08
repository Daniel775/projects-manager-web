interface GoogleProfileData {
	sub: string;
	email: string;
	name: string;
	picture: string;
}

interface UserData {
	id: number;
	name: string;
	email: string;
	imageUrl: string;
	googleId: string;
}

interface AuthenticationResponse {
	user: UserData;
	token: string;
}

interface AuthContextData {
	signed: boolean;
	user: {} | null;
	login: (data: CredentialResponse) => Promise<void>;
	register: (data: CodeResponse) => Promise<void>;
}
