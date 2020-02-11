import React, { useState } from 'react';
import { Icon, Input, InputGroup } from 'rsuite';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { sendMessage } from '../../redux/actions';

export const ChatInput = (props) => {
	const { user } = props;
	const [message, setMessage] = useState('');
	const dispatch = useDispatch();

	const handleChange = (val) => {
		setMessage(val);
	};
	const handleSubmit = () => {
		if (message && message.replace(/\s/g, '').length) {
			dispatch(sendMessage({ user, message, createdAt: new Date() }));
		}
		setMessage('');
	};

	return (
		<InputGroup>
			<Input componentClass="textarea" value={message} onChange={handleChange} />
			<InputGroup.Button onClick={handleSubmit}>
				<Icon icon="send" />
			</InputGroup.Button>
		</InputGroup>
	);
};

ChatInput.propTypes = {
	user: PropTypes.number.isRequired,
};
